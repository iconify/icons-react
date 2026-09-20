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
		"content": `<style>.rla8qccfk {
  fill: currentColor;
  d: path("m13 17.5l3.5-3.5q.275-.275.438-.65t.162-.8q0-.85-.6-1.45t-1.45-.6q-.475 0-.937.275T13 11.7q-.75-.7-1.175-.95t-.875-.25q-.85 0-1.45.6t-.6 1.45q0 .425.163.8T9.5 14zm-.175 5.325L2 12V2h10l10.8 10.85zM6.5 8q.625 0 1.063-.437T8 6.5t-.437-1.062T6.5 5t-1.062.438T5 6.5t.438 1.063T6.5 8");
}
</style><path class="rla8qccfk"/>`,
		"fallback": "material-symbols:loyalty-sharp",
	});
}

export default Component;
