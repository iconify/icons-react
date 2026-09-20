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
		"content": `<style>.jn0c1yuif {
  fill: currentColor;
  d: path("M1 19V5h22v14zm3-2V7H3v10zm2 0h12V7H6zm14 0h1V7h-1zM4 7H3zm16 0h1z");
}
</style><path class="jn0c1yuif"/>`,
		"fallback": "material-symbols:stay-current-landscape-outline-sharp",
	});
}

export default Component;
