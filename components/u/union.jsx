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
		"content": `<style>.obp_9fkva {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.75 4v9q0 2.175 1.538 3.712Q9.825 18.25 12 18.25t3.712-1.538Q17.25 15.175 17.25 13V4q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T18 3.25t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v9q0 2.796-1.977 4.773T12 19.75t-4.773-1.977T5.25 13V4q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q5.926 3.25 6 3.25t.146.014t.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141T6.75 4");
}
</style><path class="obp_9fkva"/>`,
		"fallback": "uix-solid:union",
	});
}

export default Component;
