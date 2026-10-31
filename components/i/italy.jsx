import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9cl-boot.css';
import '../../css/a/apvpf298a.css';
import '../../css/b/bjo519b-f.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9cl-boot"/><path class="apvpf298a"/><path class="bjo519b-f"/>`,
		"fallback": "tabler-flags:italy",
	});
}

export default Component;
