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
		"content": `<style>.msvw-ebth {
  fill: currentColor;
  d: path("M13.327 8.308q.539-.539.539-1.308t-.539-1.308t-1.308-.538t-1.307.538T10.173 7t.539 1.308t1.307.538t1.308-.538m-1.296 13.769l-2.646-2.596l1.384-1.712l-1.442-1.827l1.192-1.558v-2.85q-1.338-.509-2.284-1.684T7.289 7q0-2 1.365-3.365t3.365-1.366t3.366 1.366T16.75 7q0 1.698-.958 2.865q-.958 1.166-2.273 1.67v9.042z");
}
</style><path class="msvw-ebth"/>`,
		"fallback": "material-symbols-light:key-vertical",
	});
}

export default Component;
