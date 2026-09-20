import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkye0vb5n.css';
import '../../css/h/h6a3gnxsv.css';
import '../../css/j/jni3evble.css';
import '../../css/u/uwdvvmbqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkye0vb5n"/><path class="h6a3gnxsv"/><path class="jni3evble"/><path class="uwdvvmbqe"/>`,
		"fallback": "selfhst:kestra",
	});
}

export default Component;
