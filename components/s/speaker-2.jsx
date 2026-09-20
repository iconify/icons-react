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
		"content": `<style>.grga7wbum {
  fill: currentColor;
  d: path("M12 12.404q1.362 0 2.306-.935q.944-.934.944-2.296t-.944-2.315q-.944-.954-2.306-.954t-2.306.954t-.944 2.315t.944 2.296t2.306.935m0-1q-.921 0-1.586-.655q-.664-.655-.664-1.576q0-.94.665-1.595q.664-.655 1.585-.655t1.586.655t.664 1.595q0 .921-.664 1.576q-.665.655-1.586.655m0 4.154q.29 0 .51-.211q.22-.21.22-.52q0-.29-.22-.51t-.51-.22q-.31 0-.52.22t-.21.51q0 .31.21.52t.52.21M15.654 21H8.327v-1h.923q.748 0 1.33-.458t.799-1.177H7.616q-.691 0-1.153-.462T6 16.75V4.616q0-.691.463-1.153T7.616 3h8.769q.69 0 1.153.463T18 4.616V16.75q0 .69-.462 1.153t-1.153.463H12.62q.218.719.79 1.176q.572.458 1.339.458h.904z");
}
</style><path class="grga7wbum"/>`,
		"fallback": "material-symbols-light:speaker-2",
	});
}

export default Component;
