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
		"content": `<style>.dihlchbbr {
  fill: currentColor;
  d: path("M1 11h4v11H1zm15-7.75C16.65 2.49 17.66 2 18.7 2C20.55 2 22 3.45 22 5.3c0 2.27-2.91 4.9-6 7.7c-3.09-2.81-6-5.44-6-7.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25M22 17h-9l-2.09-.73l.33-.95L13 16h4v-2l-8.03-3H7v9.02L14 22l8-3z");
}
</style><path class="dihlchbbr"/>`,
		"fallback": "ic:sharp-volunteer-activism",
	});
}

export default Component;
