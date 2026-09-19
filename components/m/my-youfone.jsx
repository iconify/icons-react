import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ur3bjda1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.742 28.296c5.162-4.127 9.126-12.783 8.26-22.64c-2.97.412-4.149.58-6.385 2.356c-.596 6.012-1.245 12.973-5.49 15.882c-5.206-4.336-4.435-10.686-5.766-16.45c-2.001-1.83-4.354-1.811-6.482-1.944c.907 16.299 3.029 15.944 8.308 22.281c-8.443 2.296-10.548 17.084.348 14.393c-1.311-3.541-3.137-7.757 7.207-13.878");
}
</style><path class="ur3bjda1x"/>`,
		"fallback": "arcticons:my-youfone",
	});
}

export default Component;
