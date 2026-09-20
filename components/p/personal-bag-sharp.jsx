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
		"content": `<style>.u92nuus0w {
  fill: currentColor;
  d: path("M6 21v-9q0-1.933 1.084-3.425q1.083-1.492 2.762-2.144V6q0-.904.625-1.529T12 3.846t1.529.625T14.154 6v.43q1.679.653 2.762 2.145Q18 10.067 18 12v9zm2.5-7.5h6v2h1v-3h-7zm2.346-7.361q.294-.07.577-.104Q11.706 6 12 6t.577.034t.577.105V6q0-.483-.336-.818T12 4.846t-.818.336t-.336.818z");
}
</style><path class="u92nuus0w"/>`,
		"fallback": "material-symbols-light:personal-bag-sharp",
	});
}

export default Component;
