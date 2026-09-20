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
		"content": `<style>.rqsd1sbiq {
  fill: currentColor;
  d: path("M5.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0zm6.24-.44C10.577 2.513 9 3.344 9 4.752v14.495c0 1.413 1.589 2.244 2.75 1.437l10.498-7.302a1.75 1.75 0 0 0-.01-2.88zM10.5 4.752a.25.25 0 0 1 .391-.206L21.39 11.74a.25.25 0 0 1 .001.412l-10.498 7.301a.25.25 0 0 1-.393-.205z");
}
</style><path class="rqsd1sbiq"/>`,
		"fallback": "fluent:next-frame-24-regular",
	});
}

export default Component;
