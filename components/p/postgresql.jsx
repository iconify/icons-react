import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srar28bzr.css';
import '../../css/o/o2faufbyu.css';
import '../../css/n/nz3bqy2lz.css';
import '../../css/l/lylr0un_i.css';
import '../../css/y/y00pdnbdy.css';
import '../../css/p/phftq6btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srar28bzr"/><path class="o2faufbyu"/><path class="nz3bqy2lz"/><path class="lylr0un_i"/><path class="y00pdnbdy"/><path class="phftq6btw"/>`,
		"fallback": "bxl:postgresql",
	});
}

export default Component;
