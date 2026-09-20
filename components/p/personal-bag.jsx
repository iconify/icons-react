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
		"content": `<style>.v3etiovba {
  fill: currentColor;
  d: path("M7.616 21q-.691 0-1.153-.462T6 19.385V12q0-1.933 1.084-3.425q1.083-1.492 2.762-2.144V6q0-.904.625-1.529T12 3.846t1.529.625T14.154 6v.43q1.679.653 2.762 2.145Q18 10.067 18 12v7.385q0 .69-.462 1.152T16.384 21zm7.74-5.643q.144-.143.144-.357v-2.5h-7v1h6V15q0 .214.143.357T15 15.5t.357-.143m-4.51-9.218q.294-.07.576-.104Q11.706 6 12 6t.577.034t.577.105V6q0-.483-.336-.818T12 4.846t-.818.336t-.336.818z");
}
</style><path class="v3etiovba"/>`,
		"fallback": "material-symbols-light:personal-bag",
	});
}

export default Component;
