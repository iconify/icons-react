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
		"content": `<style>.nkwx-2bgx {
  fill: currentColor;
  d: path("M7.04 18.008Q5 16.016 5 13.1q0-1.394.558-2.634t1.484-2.224l4.12-4.025q.186-.18.403-.264T12 3.869t.435.084t.403.264l4.12 4.025q.927.985 1.484 2.224Q19 11.706 19 13.1q0 2.916-2.04 4.908T12 20t-4.96-1.992M6.07 14h11.85q.3-1.8-.348-3.094q-.647-1.295-1.322-1.945L12 4.761l-4.25 4.2q-.675.65-1.315 1.945T6.069 14");
}
</style><path class="nkwx-2bgx"/>`,
		"fallback": "material-symbols-light:opacity-outline-rounded",
	});
}

export default Component;
