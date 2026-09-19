import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljrzvsbti.css';
import '../../css/o/ohubqmb2c.css';
import '../../css/x/xcd4ndbyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljrzvsbti"/><path class="ohubqmb2c"/><path class="xcd4ndbyv"/>`,
		"fallback": "ion:tennisball-sharp",
	});
}

export default Component;
