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
		"content": `<style>.y8uqgac_r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 2.75Q3.25 2.75 3.25 6v8q0 3.122 3 3.245V20q0 .136.048.264q.048.127.138.23q.098.112.232.178q.133.066.282.076t.29-.038q.142-.047.254-.146l3.788-3.314H17.5q3.25 0 3.25-3.25V6q0-3.25-3.25-3.25zm-.5 7Q6 7 8.75 7t2.75 2.75q0 .719-.188 1.25h1.376q-.188-.531-.188-1.25Q12.5 7 15.25 7T18 9.75t-2.75 2.75h-6.5Q6 12.5 6 9.75");
}
</style><path class="y8uqgac_r"/>`,
		"fallback": "uix-solid:voicemail-support",
	});
}

export default Component;
