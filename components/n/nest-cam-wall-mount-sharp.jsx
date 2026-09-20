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
		"content": `<style>.drxuvxbvc {
  fill: currentColor;
  d: path("M3.953 15.824q-.472-.472-.472-1.143V8.219q0-.671.472-1.143t1.143-.472t1.144.475t.472 1.146q.702-1.26 1.966-2.017Q9.942 5.45 11.5 5.45q1.108 0 2.113.42t1.776 1.192l5.013 5.013l-7.752 7.79l-5.039-5.026q-.275-.276-.497-.56t-.403-.604v1.006q0 .671-.472 1.143t-1.143.472t-1.143-.472");
}
</style><path class="drxuvxbvc"/>`,
		"fallback": "material-symbols-light:nest-cam-wall-mount-sharp",
	});
}

export default Component;
