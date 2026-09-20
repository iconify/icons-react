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
		"content": `<style>.v5a5zkhti {
  fill: currentColor;
  d: path("m10.925 13.8l4.964-4.938l-.714-.714l-4.25 4.25L8.8 10.273l-.708.708zm-9.156 5.662v-1h20.462v1zm2.847-2q-.691 0-1.154-.463T3 15.846V6.077q0-.69.463-1.153t1.152-.462h14.77q.69 0 1.152.462T21 6.077v9.77q0 .69-.463 1.152t-1.153.463zm0-1h14.769q.23 0 .423-.193t.192-.423V6.077q0-.23-.192-.423q-.193-.193-.424-.193H4.616q-.231 0-.424.193Q4 5.846 4 6.077v9.77q0 .23.192.422t.423.193m-.615 0v-11z");
}
</style><path class="v5a5zkhti"/>`,
		"fallback": "material-symbols-light:sync-saved-locally-outline",
	});
}

export default Component;
