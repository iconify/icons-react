import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xamtaihib.css';
import '../../css/b/bc70y0nuy.css';
import '../../css/o/oqexibvmu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xamtaihib"/><circle class="bc70y0nuy"/><path class="oqexibvmu"/>`,
		"fallback": "formkit:warning",
	});
}

export default Component;
