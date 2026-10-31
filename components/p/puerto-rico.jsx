import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/h/h2hkf3bmt.css';
import '../../css/h/h2-v3739d.css';
import '../../css/z/z55hzee2y.css';
import '../../css/j/jjnn4obdu.css';
import '../../css/n/nu9ii6b6j.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="h2hkf3bmt"/><path class="h2-v3739d"/><path class="z55hzee2y"/><path class="jjnn4obdu"/><path class="nu9ii6b6j"/>`,
		"fallback": "tabler-flags:puerto-rico",
	});
}

export default Component;
