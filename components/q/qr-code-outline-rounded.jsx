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
		"content": `<style>.fkzhnib5n {
  fill: currentColor;
  d: path("M3 10V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v6q0 .425-.288.713T10 11H4q-.425 0-.712-.288T3 10m2-1h4V5H5zM3 20v-6q0-.425.288-.712T4 13h6q.425 0 .713.288T11 14v6q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m2-1h4v-4H5zm8-9V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11h-6q-.425 0-.712-.288T13 10m2-1h4V5h-4zm4 12v-2h2v2zm-6-6v-2h2v2zm2 2v-2h2v2zm-2 2v-2h2v2zm2 2v-2h2v2zm2-2v-2h2v2zm0-4v-2h2v2zm2 2v-2h2v2z");
}
</style><path class="fkzhnib5n"/>`,
		"fallback": "material-symbols:qr-code-outline-rounded",
	});
}

export default Component;
