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
		"content": `<style>.v8ghvfuls {
  fill: currentColor;
  d: path("M19.923 15.385V9.562L12 13.846L3.077 9L12 4.154L20.923 9v6.385zM12 18.692l-6-3.261v-4.077l6 3.262l6-3.262v4.077z");
}
</style><path class="v8ghvfuls"/>`,
		"fallback": "material-symbols-light:school-sharp",
	});
}

export default Component;
