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
		"content": `<style>.t687hyaji {
  fill: var(--svg-color--3cb054, #3cb054);
  d: path("M4.688 3c11.798.45 16.342 7.7 14.05 14.18a6.95 6.95 0 0 1-2.78 3.82c.06-.26.127-.52.167-.79c.858-5.05-.761-11.13-8.678-14.49c6.298 3.85 8.843 10.7 5.898 15.12c-5.001.8-8.657-3.58-8.657-8.63z");
}
</style><path class="t687hyaji"/>`,
		"fallback": "token-branded:ppc",
	});
}

export default Component;
