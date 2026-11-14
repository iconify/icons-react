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
		"content": `<style>.yzn78j2eg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.25 8v8.5q0 2.175-1.538 3.712Q14.175 21.75 12 21.75t-3.712-1.538Q6.75 18.675 6.75 16.5V6q0-3.75 3.75-3.75T14.25 6v9q0 2.25-2.25 2.25T9.75 15V8.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146V15q0 .75.75.75t.75-.75V6q0-2.25-2.25-2.25T8.25 6v10.5q0 3.75 3.75 3.75t3.75-3.75V8q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146");
}
</style><path class="yzn78j2eg"/>`,
		"fallback": "uix-solid:paper-clip",
	});
}

export default Component;
