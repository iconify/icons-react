import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3ky4jnzf.css';
import '../../css/j/jlozx9b3a.css';
import '../../css/w/wdip6sk2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="s3ky4jnzf"/><path class="jlozx9b3a"/><path class="wdip6sk2k"/>`,
		"fallback": "selfhst:pingvin-share-x",
	});
}

export default Component;
