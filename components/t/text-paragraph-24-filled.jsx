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
		"content": `<style>.u2m7w_b9n {
  fill: currentColor;
  d: path("M12.25 12.25A4.25 4.25 0 0 1 16.5 8h4.75a.75.75 0 0 1 0 1.5H21v11.75a.75.75 0 0 1-1.5 0V9.5h-1v11.75a.75.75 0 0 1-1.5 0V16.5h-.5a4.25 4.25 0 0 1-4.25-4.25M2 5.75A.75.75 0 0 1 2.75 5h18.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75m0 5a.75.75 0 0 1 .75-.75h9.005a5.2 5.2 0 0 0-.452 1.5H2.75a.75.75 0 0 1-.75-.75M2.75 15h9.277a5.3 5.3 0 0 0 1.39 1.5H2.75a.75.75 0 0 1 0-1.5");
}
</style><path class="u2m7w_b9n"/>`,
		"fallback": "fluent:text-paragraph-24-filled",
	});
}

export default Component;
