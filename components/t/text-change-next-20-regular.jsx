import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v-6ir3q6o {
  fill: currentColor;
  d: path("M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm-7.243 3a5.5 5.5 0 0 0-.657 1H2.5a.5.5 0 0 1 0-1zM9 14.5q0 .252.022.5H2.5a.5.5 0 0 1 0-1h6.522a6 6 0 0 0-.022.5m10 0a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0m-4.146 2.354a.5.5 0 0 1-.708-.708L15.293 15H12.5a.5.5 0 0 1 0-1h2.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 .146.351v.006a.5.5 0 0 1-.144.348l-.003.003z");
}
</style><path class="v-6ir3q6o"/>`,
		"fallback": "fluent:text-change-next-20-regular",
	});
}

export default Component;
