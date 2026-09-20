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
		"content": `<style>.bijjuibvu {
  fill: currentColor;
  d: path("M3.875 20.125Q3 19.25 3 18V9q0-.425.288-.712T4 8t.713.288T5 9v9q0 .425.288.713T6 19t.713-.288T7 18V6q0-1.25.875-2.125T10 3t2.125.875T13 6v12q0 .425.288.713T14 19t.713-.288T15 18V6q0-1.25.875-2.125T18 3t2.125.875T21 6v9q0 .425-.288.713T20 16t-.712-.288T19 15V6q0-.425-.288-.712T18 5t-.712.288T17 6v12q0 1.25-.875 2.125T14 21t-2.125-.875T11 18V6q0-.425-.288-.712T10 5t-.712.288T9 6v12q0 1.25-.875 2.125T6 21t-2.125-.875");
}
</style><path class="bijjuibvu"/>`,
		"fallback": "material-symbols:nest-true-radiant-rounded",
	});
}

export default Component;
