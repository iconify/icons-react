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
		"content": `<style>.mti6c_bjq {
  fill: currentColor;
  d: path("M15.77 10.733q.73-.729.73-1.77t-.728-1.77t-1.77-.731t-1.771.728t-.731 1.77t.729 1.77t1.769.732t1.771-.729m-7.192 5.21q1.067-1.152 2.47-1.778q1.401-.626 2.953-.626t2.954.626t2.469 1.777H20V4H8v11.942zM7 17V3h14v14zm-4 4V7h1v13h13v1zm9.941-10.98q-.441-.44-.441-1.059t.441-1.058q.442-.442 1.059-.442t1.059.442t.441 1.058t-.441 1.06q-.442.44-1.059.44t-1.059-.44M9.97 16h8.062q-.84-.73-1.873-1.096T14 14.538t-2.158.366T9.97 16M14 9.971");
}
</style><path class="mti6c_bjq"/>`,
		"fallback": "material-symbols-light:switch-account-outline-sharp",
	});
}

export default Component;
