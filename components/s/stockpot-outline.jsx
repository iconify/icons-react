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
		"content": `<style>.ng_zssb5b {
  fill: currentColor;
  d: path("M4 7.98h16v8.597q0 1.01-.707 1.716T17.577 19H6.423q-1.01 0-1.716-.707T4 16.577zm1 1v7.597q0 .605.41 1.014q.408.409 1.013.409h11.154q.605 0 1.014-.41q.409-.408.409-1.013V8.981zM4 6.597v-1h5.5v-.769q0-.352.23-.59T10.317 4h3.366q.358 0 .587.238t.23.589v.77H20v1zm8 6.885");
}
</style><path class="ng_zssb5b"/>`,
		"fallback": "material-symbols-light:stockpot-outline",
	});
}

export default Component;
