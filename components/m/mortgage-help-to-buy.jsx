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
		"content": `<style>.jo3cm-bdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.341 20.5H5.75q-.086 0-.172-.008t-.169-.026q-.085-.016-.167-.041t-.162-.058q-.079-.033-.155-.074t-.147-.088q-.072-.048-.138-.102q-.067-.055-.127-.116q-.061-.06-.116-.127q-.054-.066-.102-.138q-.048-.071-.088-.147q-.041-.076-.074-.155q-.033-.08-.058-.162t-.041-.167t-.026-.169Q4 18.836 4 18.75v-7.456q0-.187.04-.37q.039-.183.117-.353q.077-.171.189-.321q.111-.15.252-.273l6.25-5.469q.059-.052.123-.098q.063-.046.131-.087q.067-.04.138-.074t.145-.062t.149-.049q.076-.02.153-.034q.078-.015.156-.022T12 4.075t.157.007t.156.022q.077.014.153.034t.149.049q.074.028.145.062t.138.074t.131.087t.123.098l6.25 5.469q.125.11.228.241q.102.132.178.28t.123.308q.046.16.061.326M16 7V4h2v4.75M14 21.5l3.75-7.75m-.5 7.75L21 13.75m-6 5.75h3.25m-2.25-2h3.25m-2.5-2H20");
}
</style><path class="jo3cm-bdw"/>`,
		"fallback": "uix:mortgage-help-to-buy",
	});
}

export default Component;
