import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sul3pg2pb.css';
import '../../css/x/x-sy1absj.css';
import '../../css/n/n8uzvhbvq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sul3pg2pb"/><path class="x-sy1absj"/><path class="n8uzvhbvq"/>`,
		"fallback": "foundation:rss",
	});
}

export default Component;
