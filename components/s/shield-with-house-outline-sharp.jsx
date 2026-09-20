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
		"content": `<style>.devl_9b4n {
  fill: currentColor;
  d: path("M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-12.475l-5.6 4.35q.475 1.575 1.4 2.863T10 18.9V15h4v3.9q1.275-.875 2.2-2.162t1.4-2.863zm0-5.4l-6 2.25V11.1q0 .125.013.275t.012.275L12 7l5.975 4.65q0-.125.013-.275T18 11.1V6.375z");
}
</style><path class="devl_9b4n"/>`,
		"fallback": "material-symbols:shield-with-house-outline-sharp",
	});
}

export default Component;
