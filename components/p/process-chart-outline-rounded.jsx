import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.csrxmkhum {
  fill: currentColor;
  d: path("M3.208 17.558q-.183-.085-.253-.29t.014-.387L8.09 6.66q.084-.182.28-.243t.377.024t.253.29t-.014.387l-5.12 10.22q-.084.182-.28.243q-.194.06-.377-.024m5.77-.29q-.07-.205.014-.387l5.12-10.22q.084-.182.28-.243q.195-.06.377.024q.183.085.253.29t-.014.387l-5.12 10.22q-.084.182-.28.243q-.194.06-.377-.024q-.183-.085-.253-.29m6.023 0q-.07-.205.014-.387l5.12-10.22q.084-.182.28-.243q.195-.06.377.024q.183.085.253.29t-.014.387l-5.12 10.22q-.084.182-.28.243t-.377-.024t-.253-.29");
}
</style><path class="csrxmkhum"/>`,
		"fallback": "material-symbols-light:process-chart-outline-rounded",
	});
}

export default Component;
