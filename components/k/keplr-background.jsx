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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.h95rlfk3m {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12 4c6.588 0 8 1.412 8 8s-1.412 8-8 8s-8-1.412-8-8s1.412-8 8-8m5.229 2.765c-1.938-1.938-5.851-1.166-8.74 1.723s-3.662 6.803-1.724 8.74s5.85 1.166 8.74-1.723s3.661-6.803 1.723-8.74");
}

.pc5zyybwz {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.427 8.375c.116 1.188.174 1.782.485 2.217c.134.187.298.35.487.48c.44.305 1.034.355 2.223.455l.503.043v.86l-.503.043c-1.189.1-1.784.15-2.223.455c-.189.13-.353.293-.487.48c-.311.435-.369 1.03-.485 2.217h-.854c-.116-1.188-.174-1.782-.485-2.217a2 2 0 0 0-.487-.48c-.44-.305-1.034-.355-2.223-.455l-.503-.043v-.86l.503-.043c1.189-.1 1.784-.15 2.223-.455c.189-.13.353-.293.487-.48c.31-.435.369-1.03.485-2.217z");
}

.pogtrl4dt {
  fill: var(--svg-color--14afeb, #14afeb);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="pogtrl4dt"/><path class="pc5zyybwz"/><path clip-rule="evenodd" class="h95rlfk3m"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:keplr-background",
	});
}

export default Component;
