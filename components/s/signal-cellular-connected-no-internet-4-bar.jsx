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
		"content": `<style>.lfewf2byr {
  fill: currentColor;
  d: path("M3 21L21 3v4.23h-3.384V21zm16.98.02q-.21-.209-.21-.52t.21-.52q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21t-.52-.21m.02-3.25V9.615h1v8.153z");
}
</style><path class="lfewf2byr"/>`,
		"fallback": "material-symbols-light:signal-cellular-connected-no-internet-4-bar",
	});
}

export default Component;
