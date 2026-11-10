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
		"content": `<style>.z1gajb3ak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.588 39.5h-11c-7.287 0-11.49-9.07-8.255-14.502c5.686-9.548 20.36-2.986 17.585 4.464c-2.14 5.744-12.699 2.141-11.01-10.886c.83-5.494 5.608-10.076 12.275-10.076c7.584 0 11.535 6.466 11.696 12.044c4.022-.034 7.892 3.538 7.892 9.676c0 5.131-4.307 9.28-8.938 9.28h-3.529");
}
</style><path class="z1gajb3ak"/>`,
		"fallback": "arcticons:quark-cloud-drive",
	});
}

export default Component;
