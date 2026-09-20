import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fcrdwxboq {
  fill: currentColor;
  d: path("M8 14v-4h3.423L15 6.423v11.154L11.423 14zm1-1h2.85L14 15.15v-6.3L11.85 11H9zm2.5-1");
}
</style><path class="fcrdwxboq"/>`,
		"fallback": "material-symbols-light:volume-mute-outline",
	});
}

export default Component;
