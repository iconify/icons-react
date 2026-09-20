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
		"content": `<style>.fdgk1_bsn {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v5.772A6.47 6.47 0 0 1 6.5 11c1.748 0 3.334.69 4.502 1.812L11 12.75v-6a.75.75 0 0 1 1.5 0V12h3.75a.75.75 0 0 1 0 1.5h-4.5a1 1 0 0 1-.136-.012A6.47 6.47 0 0 1 13 17.5a6.47 6.47 0 0 1-1.022 3.5h5.772A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM12 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-3.146-1.854a.5.5 0 0 0-.708 0L5.5 18.293l-.896-.897a.5.5 0 0 0-.708.708l1.25 1.25a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708");
}
</style><path class="fdgk1_bsn"/>`,
		"fallback": "fluent:shifts-checkmark-24-filled",
	});
}

export default Component;
