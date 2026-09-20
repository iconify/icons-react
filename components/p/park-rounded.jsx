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
		"content": `<style>.a2oa_bb2a {
  fill: currentColor;
  d: path("M10.05 18H4.875q-.6 0-.9-.525t.05-1.025L7 12h-.075q-.6 0-.888-.537t.063-1.038l5.075-7.25q.15-.2.375-.312T12 2.75t.45.113t.375.312l5.075 7.25q.35.5.063 1.038t-.888.537H17l2.975 4.45q.35.5.05 1.025t-.9.525H13.95v3q0 .425-.287.713T12.95 22h-1.9q-.425 0-.712-.288T10.05 21z");
}
</style><path class="a2oa_bb2a"/>`,
		"fallback": "material-symbols:park-rounded",
	});
}

export default Component;
