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
		"content": `<style>.jp38irr4c {
  fill: currentColor;
  d: path("M6.5 13.5V21q0 .214-.143.357T6 21.5t-.357-.143T5.5 21V3q0-.213.143-.357T6 2.5t.357.143T6.5 3v1.5h12.583q.429 0 .661.351t.072.755L18.462 9l1.354 3.394q.161.404-.072.755t-.661.351zm7.066-3.434Q14 9.633 14 9t-.434-1.066Q13.133 7.5 12.5 7.5t-1.066.434T11 9t.434 1.066q.433.434 1.066.434t1.066-.434");
}
</style><path class="jp38irr4c"/>`,
		"fallback": "material-symbols-light:tour-rounded",
	});
}

export default Component;
