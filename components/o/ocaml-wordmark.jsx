import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj4l4600f.css';
import '../../css/q/qnh9ymbin.css';
import '../../css/s/s3nt3rbsc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj4l4600f"/><path class="qnh9ymbin"/><path class="s3nt3rbsc"/>`,
		"fallback": "devicon-plain:ocaml-wordmark",
	});
}

export default Component;
