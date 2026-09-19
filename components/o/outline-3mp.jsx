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
		"content": `<style>.bn6ebpb5p {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z");
}

.nynysxwbh {
  fill: currentColor;
  d: path("M14.5 10.5v-4c0-.55-.45-1-1-1H10V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1");
}

.xietzojdi {
  fill: currentColor;
  d: path("M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1zm3 3H15V14h1.5z");
}
</style><path class="xietzojdi"/><path class="bn6ebpb5p"/><path class="nynysxwbh"/>`,
		"fallback": "ic:outline-3mp",
	});
}

export default Component;
