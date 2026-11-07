import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddn7u078w.css';
import '../../css/d/d1guyq2pd.css';
import '../../css/n/nmfn-h5ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddn7u078w"/><path class="d1guyq2pd"/><path class="nmfn-h5ne"/>`,
		"fallback": "solar:tag-bold-duotone",
	});
}

export default Component;
