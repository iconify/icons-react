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
		"content": `<style>.cpihbebsy {
  fill: currentColor;
  d: path("M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9zm0-1.427l9.1-9.1q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05zM11.5 15h1v-5h-1zm.934-6.374q.182-.182.182-.434q0-.251-.182-.433T12 7.577t-.434.182t-.182.433t.182.434t.434.182t.434-.182M12 18.15");
}
</style><path class="cpihbebsy"/>`,
		"fallback": "material-symbols-light:perm-scan-wifi-outline",
	});
}

export default Component;
