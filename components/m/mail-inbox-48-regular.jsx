import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wnt0ssbhb {
  fill: currentColor;
  d: path("M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM39.5 24h-9.75c-.69 0-1.25.56-1.25 1.25v1.25a4.5 4.5 0 1 1-9 0v-1.25c0-.69-.56-1.25-1.25-1.25H8.5V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75zm-31 2.5H17a7 7 0 1 0 14 0h8.5v9.25a3.75 3.75 0 0 1-3.75 3.75h-23.5a3.75 3.75 0 0 1-3.75-3.75z");
}
</style><path class="wnt0ssbhb"/>`,
		"fallback": "fluent:mail-inbox-48-regular",
	});
}

export default Component;
