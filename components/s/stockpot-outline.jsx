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
		"content": `<style>.q7ek31buv {
  fill: currentColor;
  d: path("M3 8h18v9q0 1.25-.875 2.125T18 20H6q-1.25 0-2.125-.875T3 17zm2 2v7q0 .425.288.713T6 18h12q.425 0 .713-.288T19 17v-7zM3 7V5h6V4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4v1h6v2zm9 7");
}
</style><path class="q7ek31buv"/>`,
		"fallback": "material-symbols:stockpot-outline",
	});
}

export default Component;
