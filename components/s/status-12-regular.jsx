import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zk1vy_baf {
  fill: currentColor;
  d: path("M6 1q.417 0 .816.066l-.936.936a4 4 0 1 0 4.118 4.124l.937-.936Q11 5.585 11 6a5 5 0 1 1-5-5m4.441.562a1.914 1.914 0 0 0-2.707 0L5.15 4.146a.5.5 0 0 0-.12.194l-.984 2.92a.55.55 0 0 0 .696.697l2.92-.982a.5.5 0 0 0 .195-.12l2.584-2.585a1.914 1.914 0 0 0 0-2.707m-2 .707a.914.914 0 0 1 1.293 1.293l-2.502 2.5l-1.949.656l.656-1.948z");
}
</style><path class="zk1vy_baf"/>`,
		"fallback": "fluent:status-12-regular",
	});
}

export default Component;
