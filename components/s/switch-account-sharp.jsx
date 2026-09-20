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
		"content": `<style>.bu3sk1b5v {
  fill: currentColor;
  d: path("M15.77 10.733q.73-.729.73-1.77t-.728-1.77t-1.77-.731t-1.771.728t-.731 1.77t.729 1.77t1.769.732t1.771-.729M7 17V3h14v14zm-4 4V7h1v13h13v1zm5.577-5h10.846q-1.05-1.175-2.451-1.818q-1.402-.644-2.969-.644t-2.971.644T8.577 16");
}
</style><path class="bu3sk1b5v"/>`,
		"fallback": "material-symbols-light:switch-account-sharp",
	});
}

export default Component;
