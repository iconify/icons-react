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
		"content": `<style>.t-e-2cuvk {
  fill: currentColor;
  d: path("M8 20q-.825 0-1.413-.588T6 18V2q0-.825.588-1.413T8 0h8q.825 0 1.413.588T18 2v16q0 .825-.588 1.413T16 20H8Zm8-3H8v1h8v-1Zm0-2V5H8v10h8Zm0-12V2H8v1h8ZM8 24q-.425 0-.713-.288T7 23q0-.425.288-.713T8 22q.425 0 .713.288T9 23q0 .425-.288.713T8 24Zm4 0q-.425 0-.713-.288T11 23q0-.425.288-.713T12 22q.425 0 .713.288T13 23q0 .425-.288.713T12 24Zm4 0q-.425 0-.713-.288T15 23q0-.425.288-.713T16 22q.425 0 .713.288T17 23q0 .425-.288.713T16 24Zm-8-7v1v-1ZM8 2v1v-1Z");
}
</style><path class="t-e-2cuvk"/>`,
		"fallback": "material-symbols:settings-cell-outline-rounded",
	});
}

export default Component;
