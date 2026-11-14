import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pude0_byr.css';
import '../../css/i/il2mg-hhc.css';
import '../../css/e/el8qf1bpi.css';
import '../../css/z/zxugew8ln.css';
import '../../css/m/mak4w-ksu.css';
import '../../css/y/y3hk_w0yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pude0_byr"/><circle class="il2mg-hhc"/><circle class="el8qf1bpi"/><circle class="zxugew8ln"/><circle class="mak4w-ksu"/><circle class="y3hk_w0yy"/></g>`,
		"fallback": "evicons:plug-cee-red",
	});
}

export default Component;
