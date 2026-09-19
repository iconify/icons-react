import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih1ndobif.css';
import '../../css/c/cy7ufpbyc.css';
import '../../css/h/hymfp_bcn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih1ndobif"/><path class="cy7ufpbyc"/><path class="hymfp_bcn"/>`,
		"fallback": "gis:search-map",
	});
}

export default Component;
