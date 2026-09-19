import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmbdk2b0r.css';
import '../../css/p/pmzg9nbdr.css';
import '../../css/x/x5lbktbtf.css';
import '../../css/c/cccmkiv6b.css';
import '../../css/s/sifs2853s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tmbdk2b0r"/><path class="pmzg9nbdr"/><circle class="x5lbktbtf"/><path class="cccmkiv6b"/><path class="sifs2853s"/>`,
		"fallback": "carbon:vmdk-disk",
	});
}

export default Component;
