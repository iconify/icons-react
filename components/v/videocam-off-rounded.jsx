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
		"content": `<style>.xmns0zf2i {
  fill: currentColor;
  d: path("m18 10.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125l-3.325-3.325q-.25.35-.712.425t-.813-.275L8.525 5.7q-.25-.25-.288-.525t.088-.55t.35-.45T9.25 4H16q.825 0 1.413.588T18 6zm1.85 12.15L1.35 4.15q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.5 18.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275M4 4l14 14q0 .825-.587 1.413T16 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4");
}
</style><path class="xmns0zf2i"/>`,
		"fallback": "material-symbols:videocam-off-rounded",
	});
}

export default Component;
